import { Header } from "../../components/Header/Header"
import { ViewOrderTable } from "../../components/ViewOrderTable/ViewOrderTable"
import './style.scss'

export const ViewOrder = () => {

    return(
        <div className="viewOrder">

            <Header />
        <div  className="viewOrder_page">

            <div>
                <h1 className="viewOrder_role">MESERO</h1>
            </div>

            <div className="viewOrder_container">

                <section className="viewOrder_title">Órdenes</section>
                <ViewOrderTable />

            </div>

        </div>



        </div>

    )
}