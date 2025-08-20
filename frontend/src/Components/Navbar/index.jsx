import React from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const NavbarComponent = () => {
  const router = useRouter();

  const authState = useSelector((state) => state.auth);

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
              <p>Hey {authState.user.userId.name}</p>
              <p className={styles.proP}>Profile</p>
            </div>
          )}

          {!authState.profileFetched && (
            <div
              className={styles.buttonJoin}
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
