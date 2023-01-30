import { useEffect } from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"


export default function App() {

    const { register, handleSubmit, reset } = useForm()

    const [arr, setArr] = useState([])

    

    function Inncome() {
        let a = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].type==="Income") {
                a += Number(arr[i].amount)
            }
        }
        return a
    }



    function expenn() {
        let a = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].type==="Expence") {
                a += Number(arr[i].amount)
            }
        }
        return a
    }


    function total() {
        let a = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].type==="Income") {
                a += Number(arr[i].amount)
            }else {
                a -= Number(arr[i].amount)

            }
        }
        return a
    }



    function mySubmit(params) {
        console.log(params);
        console.log(arr);

        if (total()<params.amount && params.type=="Expence") {
            alert("You do not have enough money on your wallet!!!")
            return
        } else {
            arr.push(params)
        }
        
        setArr([...arr])
    }

    console.log(arr);


    return (
        <div>
            <main className="container main1">

                <h4 style={{textAlign:"center", color:"blue"}}>Expence tracker</h4>

                <div style={{marginTop:"30px"}}>
                    <h5 style={{color:"blue"}}>Your total balance:</h5>
                    <h3 style={{color:"green", fontFamily:"cursive"}}>${total()}.00</h3>
                </div>


                <div className="innc" style={{width:"400px",height:"70px", marginLeft:"15px", marginTop:"20px"}}>
                    <div style={{width:"49%", height:"100%", borderRight:"7px solid green"}}>

                        <h6 style={{color:"green"}}>INCOME</h6>

                        <h5 style={{color:"green"}}>+${Inncome()}</h5>



                    </div>

                    <div style={{width:"49%", height:"100%", borderRight:"7px solid red"}}>

                        <h6 style={{color:"red"}}>EXPENCE</h6>

                        <h5 style={{color:"red"}}>-${expenn()}</h5>


                    </div>
                </div>



                <div className="history">
                    <h4 style={{color:"green"}}>History</h4>
                    

                    <div className="hisMain">
                        {
                            arr.map(item=>(

                                item.type==="Income"?
                                <div className="added" style={{display:"flex", gap:"10px", justifyContent:"space-around", color:"black", borderRight:"10px solid green",}}>
                                    <span>{item.title}</span>
                                    <span style={{color:"green"}}>+${item.amount}</span>
                                </div>
                            :
                            <div className="added" style={{display:"flex", gap:"10px", justifyContent:"space-around", color:"black", borderRight:"10px solid red"}}>
                                <span>{item.title}</span>
                                <span style={{color:"red"}}>-${item.amount}</span>
                            </div>
                            
                   
                                
                            ))
                        }
                    </div>
                </div>



                <div className="addTr">

                    <form onSubmit={handleSubmit(mySubmit)}>
                        <h5 style={{color:"blue"}}>Add new transaction</h5>

                        <input {...register("title")} className="form-control w-75" type="text" placeholder="Enter a title..."/>

                        <select {...register("type")} className="form-select w-75">
                            <option value="">Select a type</option>
                            <option value="Income">Income</option>
                            <option value="Expence">Expence</option>
                        </select>

                        <input {...register("amount")} className="form-control w-75" type="text" placeholder="Enter an amount"/>

                        <button className="btn btn-outline-danger">Add transaction</button>
                    </form>

                </div>


            </main>
        </div>
    )
}