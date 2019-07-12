import React, {Fragment, useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import Ticket from "./Ticket";
import {LOAD_TICKETS} from "../constants/action-types";

const TicketList = ({status}) => {
    const [requestedTickets, setData] = useState({ tickets: [] });
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchTickets = async () => {
            const fetchResult = await fetch('http://0.0.0.0:3000/tasks' + '?status=' + status, {
                method: 'GET',
                mode: 'cors',
                headers: {'Content-Type': 'application/json'}
            });
            const requestedTickets = await fetchResult.json();
            setData(requestedTickets);
            dispatch({type: LOAD_TICKETS, payload: {tickets: requestedTickets.tickets, status: status}});
        };

        fetchTickets();
    }, []);

    const tickets = useSelector(state => state.tickets[status]);

    return (<Fragment>
        {Object.values(tickets).map(ticket => {
            return (<Ticket key={ticket.id} {...ticket}/>)
        })}
    </Fragment>);
};

export default TicketList;