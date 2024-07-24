import Image from "next/image"
import manPicture from '@/images/man.png'

import styled from "styled-components"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Form from "@/components/Form"

const StyledSection = styled.section`
display: flex;
padding: 80px;
justify-content: space-between;
`
const StyledH1 = styled.h1`
font-size: 40px;
font-weight: 700;
line-height: 60px;
text-align: left;
`
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 413px;
`
export default function Auth () {
  return (
    <>
      <Header />

      <StyledSection>
        <FormWrapper>
          <StyledH1>Log In</StyledH1>
          <Form />
        </FormWrapper>
        <Image src={manPicture} alt="Man with book"/>
      </StyledSection>

      <Footer />
    </>
  )
}