import { useState } from "react";
import "./Contacts.css";

const Contacts = () => {
  const [dataFromApi, setDataFromApi] = useState(null);

  const [inputValue, setInputValue] = useState("");

  const [isLoaded, setIsLoaded] = useState(false);

  const [userName, setUserName] = useState("");

  const [isDeleted, setIsDeleted] = useState(false);

  const fetchData = (data) => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      body: JSON.stringify({
        title: data,
        body: "body",
      }),
    })
      .then((data) => data.json())
      .then((res) => {
        setDataFromApi(res.id);
        setIsLoaded(true);
      });
  };

  const onChangeOurInput = (e) => {
    if (e.target.value.length > 3) {
      setUserName(e.target.value);
      fetchData(e.target.value);
      setIsDeleted(false);
    }
    setInputValue(e.target.value);
    
  };

  const deleteUser = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${dataFromApi}`, {
      method: "DELETE",
    }).then(() => {
      setIsDeleted(true);
      setInputValue("");
    });
  };

  return (
    <div className="contacts-page-container ">
      <p className="contacts-page-container__head-text">Контакты page</p>
      <div>
        <p>Введите ваши данные</p>
        <input type="text" value={inputValue} onChange={onChangeOurInput} />
      </div>
      <div>
        {isLoaded ? (
          <p>Ваш ID: {dataFromApi}</p>
        ) : (
          <p>Ваш ID ещё не загружен</p>
        )}
      </div>
      {isLoaded && (
        <div>
          <button onClick={() => deleteUser()}>
            {isDeleted
              ? "Пользователь удалён"
              : `Удалить пользователя - ${userName}`}
          </button>
        </div>
      )}
    </div>
  );
};

export default Contacts;
