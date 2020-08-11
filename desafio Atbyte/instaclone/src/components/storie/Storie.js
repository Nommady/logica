import React, { Fragment } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width:85px;
    margin:5px;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:5px;
    border:solid 1px var(--color-secundary);
    margin-top:5.2em;

`
const Avatar = styled.img`
    width:5em;
    border-style:solid;
    border-width:2px;
    border-image:linear-gradient(45deg, rgba(240,148,51,1) 0%, rgba(226,71,62,1) 70%, rgba(204,35,102,1) 95%);
    border-radius:50px;   

`
const Nome = styled.span`
    margin-top:0.5em
`


class Storie extends React.Component {
    render(){
        return(
            <Wrapper>
                <Avatar src="https://image.winudf.com/v2/image1/Y29tLmRvbGxpZnkud2FsbHBhcGVyc19zY3JlZW5fMl8xNTQ3NjcxNjQ2XzA1Ng/screen-2.jpg?fakeurl=1&type=.jpg"/>
                <Nome>Serafina</Nome>
            </Wrapper>
        )
    }
}
export default Storie