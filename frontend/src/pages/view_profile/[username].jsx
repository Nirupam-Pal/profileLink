import { clientServer } from '@/config';
import DashboardLayout from '@/layout/DashboardLayout';
import UserLayout from '@/layout/UserLayout';
import { useSearchParams } from 'next/navigation'
import React from 'react'
import styles from "./style.module.css"

export default function ViewProfilePage({ userProfile }) {

  const searchParamers = useSearchParams();

  return (
    <UserLayout>
      <DashboardLayout>
        <div className={styles.container}>
          
        </div>
      </DashboardLayout>
    </UserLayout>
  )
}


export async function getServerSideProps(context) {

  const request = await clientServer.get("/user/get_profile_based_on_username", {
    params: {
      username: context.query.username
    }
  })

  const response = await request.data
  console.log(response);

  return { props: { userProfile: request.data.profile } }
}