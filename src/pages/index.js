import Layout from '@/component/layout'
import { lazy, useEffect } from 'react';
import { BrowerRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './dashboard';


// 홈 화면 
export default function Home () {
return (
    <main>홈 화면</main>
    )
}

Home.getLayout = (page) => (
    <Layout>
        {page}
    </Layout>
)
