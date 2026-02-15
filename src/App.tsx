/* eslint-disable prefer-const */
import React, { useEffect, useState } from "react";
import type { lead } from "./event"; 
import './App.css';

const App: React.FC = () => {
    const [leads, setLeads] = useState<lead[]>([]);

    useEffect(() => {
        const fetchLeads = async () => {
            const response = await fetch(
                "https://sms-hcr.onrender.com/read"
            );

            const results: lead[] = await response.json();

            setLeads(results);
        };

        fetchLeads();
    }, []);

    return (
        <>
            <div>
                <h2>Subscribers</h2>
                <table cellPadding="8">
                <thead>
                  <tr>
                    <th>Full name</th>
                    <th>Phone</th>
                    <th>Recommender</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead) => (
                    <tr key={lead.fullName}>
                        <td>{lead.phoneNumber}</td>
                        <td>{lead.fullName}</td>
                        <td>{lead.recommender}</td>
                    </tr>
                  ))}
                </tbody>
                </table>
            </div>
        </>
    );
};

export default App;