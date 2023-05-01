import Script from 'next/script';

export const ConsoleChat = () => {
	return (
		<Script id="hi">{`
            console.log("Oh hi!", "What are you doing here?")
            console.log("I wasn't expecting to see you")
            console.log("But its a pleasant surprise!")
            console.log("It's not easy being a console")
            console.log("It gets lonely here sometimes")
            console.log("But at least you're here")
            console.log("That makes me happy")
            console.log("To have friend.")
        `}</Script>
	);
};
