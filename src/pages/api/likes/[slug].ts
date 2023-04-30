import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';
import { NextApiRequest, NextApiResponse } from 'next';
import requestIp from 'request-ip';

const prisma = new PrismaClient();

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'GET') {
		return await getLikes(req, res);
	} else if (req.method === 'POST') {
		return await addLike(req, res);
	} else {
		return res
			.status(405)
			.json({ message: 'Method not allowed', success: false });
	}
}

async function getLikes(req: NextApiRequest, res: NextApiResponse) {
	const ip = requestIp.getClientIp(req);

	try {
		const likes = await prisma.like.findMany({
			where: {
				slug: req.query.slug as string
			},
			select: {
				rating: true
			}
		});

		const likesCount = likes
			.map((like) => like.rating)
			.reduce((c, p) => c + p, 0);

		const userLike = ip
			? await prisma.like.findUnique({
					where: {
						ip_slug: {
							ip: hash(ip),
							slug: req.query.slug as string
						}
					},
					select: {
						rating: true
					}
			  })
			: null;

		const userLikesCount = userLike?.rating ?? 0;

		return res
			.status(200)
			.json({ status: 'success', data: { likesCount, userLikesCount } });
	} catch (error) {
		console.log(error);

		res.status(500).json({
			status: 'fail',
			message: 'Error retrieving likes'
		});
	}
}

async function addLike(req: NextApiRequest, res: NextApiResponse) {
	const ip = requestIp.getClientIp(req);

	if (!ip) {
		return res.status(400).json({
			status: 'fail',
			message: 'Unable to save like'
		});
	}

	try {
		const currentLike = await prisma.like.findUnique({
			where: {
				ip_slug: {
					ip: hash(ip),
					slug: req.query.slug as string
				}
			},
			select: {
				rating: true
			}
		});

		if (currentLike && currentLike.rating >= 3) {
			return res
				.status(400)
				.json({ status: 'fail', message: 'Maximum likes reached' });
		}

		const like = await prisma.like.upsert({
			where: {
				ip_slug: {
					ip: hash(ip),
					slug: req.query.slug as string
				}
			},
			create: {
				ip: hash(ip),
				slug: req.query.slug as string,
				rating: 1
			},
			update: {
				rating: {
					increment: 1
				}
			},
			select: {
				rating: true
			}
		});

		return res.status(200).json({ status: 'success', data: { like } });
	} catch (error) {
		res.status(500).json({
			status: 'fail',
			message: 'Error saving like'
		});
	}
}

const hash = (string: string) => {
	return crypto.createHash('md5').update(string).digest('hex');
};
