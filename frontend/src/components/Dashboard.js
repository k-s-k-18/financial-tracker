import LinkAccount from "./LinkAccount";


const Dashboard = ()=>{

    return (
        <>
            <div className="dashboard-container">
                <div className="dashboard-menu">
                    <ul>
                        <li>Home</li>
                        <li>Transactions</li>
                        <li>Settings</li>
                    </ul>
                </div>
                <div className="dashboard-content">
                    <div className="add-accounts">
                        <h3> Add Accounts </h3>
                        <LinkAccount/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;