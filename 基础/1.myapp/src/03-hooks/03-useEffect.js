
import React,{useState,useEffect} from 'react'
import axios from 'axios'
export default function App() {
    const [list, setlist] = useState([])

    useEffect(()=>{
        axios.get("/test.json").then(res=>{
            console.log(res.data)
            setlist(res.data.data.films)
        })
    },[]) // 传空数组， 说明并不依赖参数，只会执行一次，模拟cdm生命周期函数


    useEffect(() => {
        // axios.get()
    }, [])

    return (
        <div>
            app
            {
                list.map(item=>
                <li key={item.filmId}>{item.name}</li>    
                )
            }
        </div>
    )
}
