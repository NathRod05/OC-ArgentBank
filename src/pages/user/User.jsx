import Balance from "../../components/balance-card/BalanceCard";
import UserName from "../../components/username/UserName";
import "./user.css";

import mockData from "../../../mock-data.json";

function User() {
  return (
    <main className="container-user">
      <UserName username="Tony" />
      {mockData.map((balance) => {
        return (
          <Balance
            key={balance.id}
            id={balance.id}
            title={balance.title}
            amount={balance.amount}
            description={balance.description}
          />
        );
      })}
    </main>
  );
}

export default User;
