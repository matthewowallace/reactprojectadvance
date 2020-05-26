import React from 'react';
import styled from 'styled-components'
import image from '../../assets/1.jpg';

const Error404 = styled.div`
    background-image: url(${image});
    background-size:cover;
    font-size: 30px;
    height:91vh;
    overflow-y:hidden;
    background-position: 0px -360px;
`;

const Text404 = styled.h1`
      border: 3px solid #fff;
      margin-left:30%;
      margin-right:30%;
      background-color: rgba(255,255,255,0.6);
`;

const  NotFoundPage = () =>(
        <Error404>
            <Text404>
                <h1>Error 404</h1>
            </Text404>
        </Error404>
);
export default NotFoundPage;
