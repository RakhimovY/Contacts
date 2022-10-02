import React, { useEffect } from "react";
import { MainContacts } from "../components/MainContacts";
import {  useNavigate } from "react-router-dom";
import { useAuth } from "../store/useHooks";

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const {isAuth} = useAuth();
  console.log('isAuth', isAuth);

  useEffect(() => {
    if(!isAuth) navigate('/signin');
  }, [isAuth, navigate])
  
  return <div className="container mx-auto max-w-[760px] pt-5 text-light">
      <MainContacts />
    </div>
};
