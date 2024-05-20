import * as S from "./ModalForm.styled";

export default function ModalForm({
  title,
  buttonText,
  buttonAction,
  inputs,
  children,
}) {
  return (
    <S.Wrapper>
      <S.ContainerSignup>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTitle>
              <h2>{title}</h2>
            </S.ModalTitle>
            <S.ModalFormStyled id="formLogUp" action="#">
              {inputs.map((input) => (
                <S.ModalLabel key={input.id} htmlFor={input.id}>
                  <S.ModalInput
                    type={input.type}
                    name={input.name}
                    id={input.id}
                    placeholder={input.placeholder}
                    aria-label={input.ariaLabel}
                  />
                </S.ModalLabel>
              ))}
              <S.ModalButton
                onClick={buttonAction}
                type="submit"
                id="SignUpEnter"
              >
                {buttonText}
              </S.ModalButton>
              {children}
            </S.ModalFormStyled>
          </S.ModalBlock>
        </S.Modal>
      </S.ContainerSignup>
    </S.Wrapper>
  );
}
