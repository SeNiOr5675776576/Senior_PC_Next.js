"use client"
import { useQuery } from 'react-query';
import axios from 'axios';
import { useBg } from '@/store/use_bg'
import { Url } from '@/constants/request';
import { useEffect } from 'react';

export default function Layout({ children }) {
    
    
    return <section>{children}</section>
}