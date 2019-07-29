import React, { Component } from 'react'

class Cart extends Component {
    render() {
        return (
            <div className='Cart_wrap'>
                <header className="header">
                    <ul>
                        <li>
                            <span>★</span>
                            30天无忧退货
                        </li>
                        <li>
                            <span>★</span>
                            48小时快速退款
                        </li>
                        <li>
                            <span>★</span>
                            满88元免邮费
                        </li>
                    </ul>
                </header>
                <section className="main"></section>
            </div>
        )
    }
}
export default Cart