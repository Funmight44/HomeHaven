import { useEffect } from "react";

const UseTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - HomeHaven`;
    }, [title])
}
 
export default UseTitle;