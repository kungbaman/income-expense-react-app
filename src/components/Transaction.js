import Item from "./Item";
import "./Transaction.css"

const Transaction = (props) => {
    const {items} = props
    return (
        <div>
            <ul className="item-list">
                {items.map((e) =>{
                // return <Item title={e.title} amount={e.amount} key = {uuidv4()}/>                
                // return <Item {...e} key = {uuidv4()}/> // Props & Spread Operator
                return <Item {...e} key = {e.id}/>
                })}
            
                {/* <Item title={data[0].title} amount={data[0].amount}/>
                <Item title={data[1].title} amount={data[1].amount}/>
                <Item title={data[2].title} amount={data[2].amount}/>
                <Item title="ค่าที่พักโรงแรม" amount="2500"/> */}
            </ul>
        </div>


    );
}

export default Transaction