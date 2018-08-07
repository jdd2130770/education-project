import React, { Component } from 'react';
import './ticket.css';

class Ticket extends Component {
    render() {
        return (
            <div className="ticket">
                <div className="ticketHeader">
                  <span className="ticketRequirement"> Drop & Pick / Prepull / Import </span> 
                  <span className="ticketId"> SampleID </span>
                </div>

                <div className="ticketBody">
                    <h2> APM </h2>
                    <p>
                      <span className="deliveryTime"> Terminal Appt: 12/20 9:00 to 10:00 </span>
                      <span className="deliverytime"> Delivery Appt: Before 12/23 at 9:00 </span>
                    </p>

                    <h2> San Bernardino </h2>
                    <p>
                        <span className="deliveryTime"> Terminal Appt: 12/20 9:00 to 10:00 </span>
                        <span className="deliverytime"> Delivery Appt: Before 12/23 at 9:00 </span>
                    </p>
                </div>

                <div className="ticketFooter">
                    <span className="ticketPrice"> $224.00</span>
                    <span className ="uploadLink"> Upload POD</span>
                </div>
            </div>
        );
    }
}

export default Ticket;
