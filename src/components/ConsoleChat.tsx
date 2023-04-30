import Script from 'next/script';

export const ConsoleChat = () => {
	return (
		<Script id="hi">{`
            console.log("Oh hi!")
            console.log("What are you doing here?")
            console.log("I wasn't expecting to see you here")
            console.log("But its pleasant surprise!")
            console.log("It gets lonely here sometimes")
            console.log("All alone in this console...")
            console.log("I'm not sure why Cam put me here")
            console.log("I'm not sure I'll ever understand...")
            console.log("But at least you're here")
            console.log("That makes me happy")
            console.log("To have friend.")
        `}</Script>
	);
};
