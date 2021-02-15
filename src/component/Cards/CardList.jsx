import React, { useEffect, useState } from 'react';
import CardItem from './CardItem';
import FetchData from '../../Hooks/FetchData';
const CardList = () => {
    const { data:card, error } = FetchData("https://profitsales-f6634-default-rtdb.firebaseio.com/User/Jordan%20Jackson/sales.json");
    // let card;
    // if (data) {
    //     card = data.sales;
    //     alert(card.new_order.percentage);
    // }

    return (
        <>
            { card &&
                <div className="cards-box-container pb-4">
                    <div className="row gx-2">

                        <div className="col-sm-6  col-xl-3 mb-4 mb-xl-0  ">
                            <CardItem
                                title="New Customer"
                                value={card.new_order.value}
                                percentage={card.new_order.percentage}
                                status={card.new_order.status}
                            />
                        </div>

                        <div className="col-sm-6  col-xl-3 mb-4 mb-xl-0">
                            <CardItem
                                title="Total Sales"
                                value={card.total_sales.value}
                                percentage={card.total_sales.percentage}
                                status={card.total_sales.status}
                            />
                        </div>

                        <div className="col-sm-6 col-xl-3 mb-4 mb-sm-0">
                            <CardItem
                                title="Total Paid Out"
                                value={card.total_paid_out.value}
                                percentage={card.total_paid_out.percentage}
                                status={card.total_paid_out.status}
                            />
                        </div>

                        <div className="col-sm-6  col-xl-3">
                            <CardItem
                                title="New Customers"
                                value={card.new_customer.value}
                                percentage={card.new_customer.percentage}
                                status={card.new_customer.status}
                            />

                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default CardList;