import LinkAccount from "./LinkAccount";


const Dashboard = ()=>{

    return (
        <>
            <div className="dashboard-container">
                <div className="dashboard-menu">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Accounts</a></li>
                        <li><a href="/">Transactions</a></li>
                        <li><a href="/">Settings</a></li>
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