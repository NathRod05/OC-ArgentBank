import Balance from "../../components/balance-card/BalanceCard";
import UserName from "../../components/username/UserName";
import "./user.css";

function User() {
  return (
    <main className="container-user">
      <UserName username="Tony" />
      <Balance
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />
      <Balance
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />
      <Balance
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />
    </main>
  );
}

export default User;
