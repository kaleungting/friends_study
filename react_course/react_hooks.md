const [user, setUser] = useState()
const [searchQuery, setSearchQuery] = useState("What are you looking for?")

destructures and returns two values that can be used in the component -> 
    user -> basically what it says (the state)
    setUser -> a function that takes in an input that will replace the current state
    

useEffect(() => {
    console.log('hello')
}, [user]);

useEffect function fires whenever the component renders or updates or mount
- adding the stuff in the array, as callback, means useEffect will only fire when the specific state of what's inside the array rerenders
- what you put in the array can help you stop infinitely rerendering
- 
