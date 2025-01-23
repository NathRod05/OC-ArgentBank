import Balance from "../../components/balance-card/BalanceCard";
import UserName from "../../components/username/UserName";
import "./user.css";

import mockData from "../../../mock-data.json";
import ModalEdit from "../../components/modal/ModalEdit";

function User() {
  return (
    <main className="container-user">
      <UserName username="Tony" />
      <div className="modal">
        <div className="overlay"></div>
        <ModalEdit />
      </div>
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
