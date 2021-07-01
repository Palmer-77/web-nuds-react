import React, { useState, useContext, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from './Auth'
import { firestore } from "../database/firebase";
import firebaseApp from "../database/firebase";
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';







function Stparents() {

  const { currentUser } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [dataEvent, setDataEvent] = useState([]);




  useEffect(() => {



    const ref = firestore.collection("Users");
    ref.onSnapshot(
      (snapshot) => {
        let tempDataArray = [];
        snapshot.forEach((doc) => {
          if (doc.exists) {
            tempDataArray = [
              ...tempDataArray,
              {
                id: doc.id,
                name: doc.data().name,
                lastName: doc.data().lastName,
                provinceUser: doc.data().provinceUser,
                sex: doc.data().sex,
                birthday: doc.data().birthday,
                tel: doc.data().tel,
              },
            ];
          }
        });
        setData((data) => tempDataArray);
      },
      (err) => {
        console.log(err);
      }
    );



    const refE = firestore.collection("Events");
    refE.onSnapshot(
      (snapshot) => {
        let tempDataArray = [];
        snapshot.forEach((doc) => {
          if (doc.exists) {
            tempDataArray = [
              ...tempDataArray,
              {
                id: doc.id,
                title: doc.data().title,
                detail: doc.data().detail,
                nameCompany: doc.data().nameCompany,
                dateStart: doc.data().dateStart,
                dateEnd: doc.data().dateEnd,
                category: doc.data().category,
              },
            ];
          }
        });
        setDataEvent((dataEvent) => tempDataArray);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <body>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/dashboard">
            <img
              alt=""
              src="http://www.nu.ac.th/wp-content/uploads/2018/01/NULOGO-Download-EN.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            NUDS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/dashboard">หน้าหลัก</Nav.Link>
              <Nav.Link href="/students">จัดการนักเรียน</Nav.Link>
              <Nav.Link href="/stparents">จัดการผู้ปกครอง</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link><button onClick={() => firebaseApp.auth().signOut()} class="btn btn-danger">ออกจากระบบ</button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container">
        <div style={{ width: "100%", marginTop: 20 }}>
          <h1>รายชื่อผู้ปกครอง</h1>
          <table className="table table-striped table-bordered">
            <tbody>
              <tr class="table-dark">
                <td align="center">ID</td>
                <td align="center">ชื่อ</td>
                <td align="center">นามสกุล</td>
                <td align="center">เพศ</td>
                <td align="center">วันเกิด</td>
                <td align="center">IDลูก</td>
              </tr>
              {dataEvent.map((item, index) => {
                return (

                  <tr
                    key={index}
                    style={
                      index % 2 === 0 ? { backgroundColor: "lightgray" } : null
                    }
                  >
                    <td scope="row">{item.id}</td>
                    <td scope="row">{item.title}</td>
                    <td scope="row">{item.detail}</td>
                    <td scope="row">{item.nameCompany}</td>
                    <td scope="row">{item.dateStart}</td>
                    <td scope="row">{item.dateEnd}</td>
                    <td scope="row">{item.category}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </body>
  );
}


export default Stparents;