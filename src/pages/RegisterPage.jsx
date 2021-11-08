/** @format */

import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(
			rgba(255, 255, 255, 0.5),
			rgba(255, 255, 255, 0.5)
		),
		url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
			center;
    background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div`
	width: 40%;
	padding: 20px;
	background-color: white;

	${mobile({ width: "75%" })}
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;

const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0px 0px;
	padding: 10px;
	border: none;
	border-bottom: 1px solid teal;
`;

const Agreement = styled.span`
	font-size: 13px;
	margin: 20px 0px;
`;

const Button = styled.button`
	width: 40%;
	border: 1px solid teal;
	padding: 15px 20px;
	background-color: white;
	color: teal;
	cursor: pointer;

	&:hover {
		background-color: teal;
		color: white;
		transition: all 0.5s ease;
	}
`;



const RegisterPage = () => {
	return (
		<Container>
			<Wrapper>
				<Title>CREATE AN ACCOUNT</Title>
				<Form>
					<Input placeholder="Name" />
					<Input placeholder="Last Name" />
					<Input placeholder="Email" />
					<Input placeholder="Username" />
					<Input placeholder="Password" />
					<Input placeholder="Confirm Password" />
					<Agreement>
						By creating an account, I consent to the processing of my personal
						data in accordance with the <b>PRIVACY POLICY</b>
					</Agreement>
				</Form>
				<Link to="/">
					<Button>CREATE</Button>
				</Link>
			</Wrapper>
		</Container>
	);
};

export default RegisterPage;
