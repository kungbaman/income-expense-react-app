import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import './App.css'
import { useState, useEffect } from "react";
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const design = {color:"red", textAlign:"center", fontWeight:"550"};
const Title = () => <h1 className="title" style={design}>แอพบัญชีรายรับ - รายจ่าย</h1> // Component

function App() { // Root Component or Parent Component
    // const initData = [
    //     {id:1, title:"ค่ารักษาพยาบาล", amount:3000},
    //     {id:2, title:"ค่าอาหาร", amount:500},
    //     {id:3, title:"ค่าน้ำมัน", amount:2000}
    // ]

    // const initState = [
    //     {id:1, title:"ค่าเช่าบ้าน", amount:-2000},
    //     {id:2, title:"เงินเดือน", amount:12000},
    //     {id:3, title:"ค่าเดินทาง", amount:-500},
    //     {id:4, title:"ขายของ", amount:2000}
    // ]

    const [items,setItems] = useState([])
    const [reportIncome,setReportIncome] = useState(0)
    const [reportExpense,setReportExpense] = useState(0)

    const onAddNewItem = (newItem) => {
        setItems((prevItem) => {
            return [newItem,...prevItem]
        })
    }

    useEffect(() => {
        const amounts = items.map(items=>items.amount)
        const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
        const expense = (amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0))*-1
        setReportIncome(income)
        setReportExpense(expense)
    },[items,reportIncome,reportExpense])

    //useReducer
    /* const [showReport,setShowReport] = useState(false)
    const reducer = (state,action) => {
        switch(action.type){
            case "SHOW" :
                return setShowReport(true)
            case "HIDE" :
                return setShowReport(false)
        }
    }
    const [result,dispatch] = useReducer(reducer,showReport)*/
    /*_____________________________________________*/

    return (
        <DataContext.Provider value={
            {
                income : reportIncome,
                expense : reportExpense
            }
        }>
            <div className="container">
                <Title/>
                {/* {showReport && <ReportComponent/>} */}
                <Router>
                <div>
                    <ul className="horizontal-menu">
                        <li>
                            <Link to="/">ข้อมูลบัญชี</Link>
                        </li>
                        <li>
                            <Link to="/insert">บันทึกข้อมูล</Link>
                        </li>
                    </ul>
                    <Routes>
                        <Route path="/" element={<ReportComponent/>}/>
                        <Route 
                            path="/insert"
                            element={
                                <>
                                <FormComponent onAddItem = {onAddNewItem}/>
                                <Transaction items = {items}/>
                                </>
                            }
                        />
                    </Routes>
                </div>
                </Router>    
            </div>
        </DataContext.Provider>

        /* <section>
            <article>
                <h1>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
                <p>บันทึกข้อมูลบัญชีในแต่ละวัน</p>
                <ul>
                    <li>ค่าเดินทาง <span>-200</span></li>
                    <li>เงินเดือน <span>+20,000</span></li>
                    <li>ค่าอาหาร <span>-500</span></li>
                </ul>
            </article>
        </section> */
    );
}

export default App;
