import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    return (
        <span>
            {
                strArray.map((char, i) => (
                    <span key={char + i} className={`${letterClass} _${i + idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
}

export default AnimatedLetters

// Explanation 
/*This component will receive three arguments.
The first argument, letterClass is going to be the class that is applied to the letters.
In every component where AnimatedLetters is rendered, a useState hook is used 
to set the inital state of this argument to text-animate.
The second argument, strArray, will be the array of the characters that will be passed in.
The third argument, idx, will set the delay of the animation.

The type of element the AnimatedLetters will return is a span, 
because span is an inline element and the letters need to form a word.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
The map() method allows you to iterate over an array 
and modify its elements using a callback function.
The map() method passes more than just an element.
It also passes three arguments to the callback function: 
the current element, the index of the current elements and the whole array object.
I am only using the element and the index and ignoring the array object.
*/
