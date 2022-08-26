import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { type } from "@testing-library/user-event/dist/type";
import { StringLiteral } from "typescript";

type address = {
  province: string;
  city: string;
  address: string;
};
interface User {
  id: number | string;
  FirstName: string;
  LastName: string;
  Gender: boolean; //1: name, 0: nu
  Birthday: string;
  Address: address;
  Phone: number;
  Email: string;
  Active: string;
  creat_at: string;
  updated_at?: string;
  deleted_at?: string;
  // children?: React.ReactNode;
}
const persons: User[] = [];

const person1: User = {
  id: 123,
  FirstName: "Nguyen",
  LastName: "Cuong",
  Gender: true,
  Birthday: "01/02/1999",
  Address: {
    province: "Nghe An",
    city: "Vinh",
    address: "Le Loi street",
  },
  Phone: 1231245153,
  Email: "whatsup@gmail.com",
  Active: "read",
  creat_at: "01/08/2022",
  updated_at: "02/08/2022",
  deleted_at: "03/08/2022",
};
const person2: User = {
  id: 456,
  FirstName: "Nguyen",
  LastName: "Dung",
  Gender: true,
  Birthday: "01/02/2000",
  Address: {
    province: "Nghe An",
    city: "Vinh",
    address: "Tran Phu street",
  },
  Phone: 4365775865,
  Email: "whatsup2@gmail.com",
  Active: "write",
  creat_at: "01/08/2022",
};
const person3: User = {
  id: 789,
  FirstName: "Vu",
  LastName: "Dat",
  Gender: true,
  Birthday: "07/10/1999",
  Address: {
    province: "Thai Binh",
    city: "Thai Binh city",
    address: "Dinh Phung street",
  },
  Phone: 7456634535,
  Email: "whatsup3@gmail.com",
  Active: "read",
  creat_at: "10/10/2022",
  updated_at: "20/10/2022",
};
const person4: User = {
  id: 101,
  FirstName: "Pham",
  LastName: "Tuan",
  Gender: true,
  Birthday: "09/03/2002",
  Address: {
    province: "Ha Tinh",
    city: "Ha Tinh city",
    address: "Xuan Dieu street",
  },
  Phone: 459235625453,
  Email: "whatsup4@gmail.com",
  Active: "go",
  creat_at: "05/02/2022",
  updated_at: "02/04/2022",
  deleted_at: "03/07/2022",
};
const person5: User = {
  id: 131,
  FirstName: "Dinh",
  LastName: "Thu Trang",
  Gender: false,
  Birthday: "05/05/2001",
  Address: {
    province: "Nam Dinh",
    city: "Nam Dinh city",
    address: "Paris street",
  },
  Phone: 43245364574,
  Email: "whatsup5@gmail.com",
  Active: "read",
  creat_at: "11/05/2022",
  updated_at: "02/08/2022",
  deleted_at: "03/08/2022",
};
const person6: User = {
  id: 151,
  FirstName: "Dinh",
  LastName: "Phuoc",
  Gender: true,
  Birthday: "21/10/1999",
  Address: {
    province: "Khanh Hoa",
    city: "Nha Trang",
    address: "S.T street",
  },
  Phone: 8657545367,
  Email: "whatsup6@gmail.com",
  Active: "read",
  creat_at: "11/08/2022",
  updated_at: "02/09/2022",
  deleted_at: "03/10/2022",
};
const person7: User = {
  id: 161,
  FirstName: "Ho",
  LastName: "Sy Thanh",
  Gender: true,
  Birthday: "01/02/2004",
  Address: {
    province: "Nghe An",
    city: "Nam Dan",
    address: "Kim Lien",
  },
  Phone: 654352556,
  Email: "whatsup7@gmail.com",
  Active: "jumb",
  creat_at: "21/11/2022",
  updated_at: "02/12/2022",
};
const person8: User = {
  id: 171,
  FirstName: "B",
  LastName: "Ray",
  Gender: true,
  Birthday: "01/02/1995",
  Address: {
    province: "Ho Chi Minh",
    city: "HCM city",
    address: "Hoa Binh street",
  },
  Phone: 97684562644,
  Email: "whatsup8@gmail.com",
  Active: "write",
  creat_at: "30/09/2022",
  updated_at: "02/10/2022",
  deleted_at: "03/11/2022",
};
const person9: User = {
  id: 181,
  FirstName: "Rich",
  LastName: "Choi",
  Gender: true,
  Birthday: "11/05/1999",
  Address: {
    province: "Ha Noi",
    city: "Ha Noi city",
    address: "Xuan Dinh street",
  },
  Phone: 879764553,
  Email: "whatsup9@gmail.com",
  Active: "write",
  creat_at: "21/05/2022",
  updated_at: "02/08/2022",
  deleted_at: "03/08/2022",
};
const person10: User = {
  id: 191,
  FirstName: "Phao",
  LastName: "Northside",
  Gender: false,
  Birthday: "01/05/2000",
  Address: {
    province: "Hoa Binh",
    city: "Hoa Binh city",
    address: "Something street",
  },
  Phone: 74553245262,
  Email: "whatsup10@gmail.com",
  Active: "read",
  creat_at: "12/07/2022",
  updated_at: "02/08/2022",
  deleted_at: "03/08/2022",
};

persons.push(
  person1,
  person2,
  person3,
  person4,
  person5,
  person6,
  person7,
  person8,
  person9,
  person10
);

const App = () => {
  return (
    <div className="App">
      <p id="name_tab">Bảng User</p>
      <table id="tab_user" border={1}>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Birthday</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Active</th>
          <th>Creat at</th>
          <th>Update at</th>
          <th>Delete at</th>
        </tr>
        {persons.map((element) => {
          return (
            <tr>
              <td>{element.id}</td>
              <td>{element.FirstName}</td>
              <td>{element.LastName}</td>
              <td>{element.Gender}</td>
              <td>{element.Birthday}</td>
              <td>
                {element.Address.address +
                  ", " +
                  element.Address.city +
                  ", " +
                  element.Address.province}
              </td>
              <td>{element.Phone}</td>
              <td>{element.Email}</td>
              <td>{element.Active}</td>
              <td>{element.creat_at}</td>
              <td>{element.updated_at}</td>
              <td>{element.deleted_at}</td>
            </tr>
          );
        })}
      </table>

      {/* <div id="form_input">
        <>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </>
      </div> */}
    </div>
  );
};

export default App;
