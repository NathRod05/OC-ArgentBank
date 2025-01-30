import Balance from "../../components/balance-card/BalanceCard";
import UserName from "../../components/username/UserName";
import "./user.css";
import { useSelector } from "react-redux";
import { userInfo } from "../../redux/userSlice";
import { useState } from "react";
import mockData from "../../../mock-data.json";
import ModalEdit from "../../components/modal/ModalEdit";

function User() {
  const user = useSelector(userInfo);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="container-user">
      <UserName username={user.userName} onOpen={handleOpenModal} />
      {isModalOpen && (
        <div className="overlay">
          <div className="modal">
            <ModalEdit onClose={handleCloseModal} />
          </div>
        </div>
      )}
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
