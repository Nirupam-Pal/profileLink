import React from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "@/config/redux/reducer/authReducer";

const NavbarComponent = () => {
  const router = useRouter();

  const authState = useSelector((state) => state.auth);

  const dispatch = useDispatch()
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <h1
          className={styles.navh1}
          onClick={() => {
            router.push("/");
          }}
        >
          Pro Connect
        </h1>

        <div className={styles.navbarOptionsContainer}>
          {authState.profileFetched && (
            <div className={styles.profile}>
              <p>Hey {authState.user.userId.username}</p>
              <p className={styles.proP}>Profile</p>
              <p onClick={()=>{
                localStorage.removeItem("token")
                router.push("/login")
                dispatch(reset())
              }} className={styles.buttonNav}>Logout</p>
            </div>
          )}

          {!authState.profileFetched && (
            <div
              className={styles.buttonNav}
              onClick={() => {
                router.push("/login");
              }}
            >
              <p>Be a part</p>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
