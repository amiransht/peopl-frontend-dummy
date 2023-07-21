import React from "react";
import "./EmailSentStyle.css";
import ButtonLarge from "../../../components/Button/Large/ButtonLarge";

import { useNavigate } from "react-router-dom";

type Props = {};

export default function EmailSent({}: Props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="logo-app">Peopl.</div>
      <div className="auth-page">
        <div className="email-sent-container">
          <div className="icon-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
            >
              <g clip-path="url(#clip0_43_39538)">
                <path
                  opacity="0.928"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M69.0602 18.1365C69.0602 19.3806 69.0602 20.6249 69.0602 21.8691C67.9833 26.9677 64.9172 30.1894 59.8619 31.534C54.3965 32.4326 50.1529 30.5885 47.1309 26.0017C44.3965 20.48 45.1741 15.5255 49.4638 11.1378C53.2454 8.08011 57.4223 7.41357 61.9948 9.13813C65.8734 10.9495 68.2285 13.9489 69.0602 18.1365ZM57.1957 10.4046C62.2994 10.7759 65.4766 13.442 66.7273 18.4031C67.1372 24.2128 64.5377 27.8788 58.9287 29.401C54.0563 29.8643 50.568 27.8869 48.464 23.4688C46.9116 18.2 48.4891 14.1786 53.1965 11.4044C54.487 10.8228 55.8201 10.4895 57.1957 10.4046Z"
                  fill="#AE62FE"
                />
                <path
                  opacity="0.968"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M56.7956 14.6705C57.1538 14.6486 57.5093 14.6709 57.8621 14.7371C58.1064 14.8038 58.262 14.9594 58.3286 15.2037C58.3953 17.8695 58.4176 20.5357 58.3953 23.2022C59.3586 23.3025 59.6919 23.8357 59.3951 24.8019C59.3285 25.0463 59.1729 25.2019 58.9285 25.2685C57.8621 25.3574 56.7956 25.3574 55.7291 25.2685C55.607 25.2187 55.4958 25.152 55.3959 25.0685C55.1147 24.4979 55.137 23.9424 55.4625 23.4022C55.7085 23.2518 55.9751 23.1852 56.2624 23.2022C56.2624 21.4248 56.2624 19.6473 56.2624 17.8699C55.2991 17.7696 54.9658 17.2364 55.2625 16.2702C55.711 15.6664 56.222 15.1332 56.7956 14.6705Z"
                  fill="#AE62FE"
                />
                <path
                  opacity="0.989"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.806152 57.4625C0.806152 45.9979 0.806152 34.5334 0.806152 23.0689C1.40407 20.9381 2.7816 19.5827 4.93872 19.003C17.603 18.9141 30.2673 18.9141 42.9317 19.003C43.3337 19.2068 43.5114 19.5401 43.4649 20.0028C43.5114 20.4655 43.3337 20.7988 42.9317 21.0026C30.6673 21.047 18.4029 21.0915 6.13849 21.1359C4.2966 21.3781 3.25234 22.4223 3.00574 24.2687C2.91687 34.9333 2.91687 45.598 3.00574 56.2627C3.25014 58.1068 4.2944 59.1511 6.13849 59.3955C21.78 59.4844 37.4216 59.4844 53.0631 59.3955C54.9072 59.1511 55.9515 58.1068 56.1959 56.2627C56.2402 48.9751 56.2848 41.6877 56.3292 34.4001C56.3958 34.1557 56.5514 34.0002 56.7957 33.9335C57.1513 33.8446 57.5067 33.8446 57.8622 33.9335C58.1066 34.0002 58.2621 34.1557 58.3288 34.4001C58.3511 38.2438 58.3732 42.0876 58.3954 45.9313C58.4156 49.9589 58.3489 53.9805 58.1955 57.9957C57.5148 59.8762 56.204 61.0538 54.2629 61.5284C37.8215 61.6173 21.3801 61.6173 4.93872 61.5284C2.7816 60.9486 1.40407 59.5933 0.806152 57.4625Z"
                  fill="#AE62FE"
                />
                <path
                  opacity="0.928"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.60545 23.2022C6.06914 23.1601 6.51351 23.2268 6.93853 23.4022C13.6086 29.4948 20.3184 35.5382 27.0681 41.5322C28.7567 42.5097 30.4452 42.5097 32.1338 41.5322C36.533 37.5773 40.9322 33.6226 45.3314 29.6677C46.6197 29.401 47.175 29.9121 46.9977 31.2007C43.3947 34.5892 39.7287 37.8996 35.9998 41.1322C41.9158 45.9376 47.8703 50.6922 53.8631 55.3962C54.4853 57.0403 53.9521 57.6181 52.2634 57.1293C46.3535 52.3745 40.4434 47.62 34.5334 42.8652C34.4001 42.7763 34.2668 42.7763 34.1335 42.8652C31.9725 44.6144 29.573 45.0143 26.9348 44.065C26.2104 43.6922 25.5217 43.2701 24.8685 42.7986C18.8548 47.523 12.8782 52.2999 6.93853 57.1293C5.24995 57.6181 4.71672 57.0403 5.33883 55.3962C11.3317 50.6922 17.2862 45.9376 23.2022 41.1322C17.2256 35.7776 11.2488 30.4232 5.27218 25.0686C4.92885 24.3399 5.03995 23.7177 5.60545 23.2022Z"
                  fill="#AE62FE"
                />
              </g>
              <defs>
                <clipPath id="clip0_43_39538">
                  <rect
                    width="68.254"
                    height="68.254"
                    fill="white"
                    transform="translate(0.873047 0.873047)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h3>Check Your Email</h3>
          <div className="body-p6 text-center">
            We have sent instructions to set up your password to your email
          </div>
          <div className="email-sent-button">
            <ButtonLarge
                          buttonText={"Open Email App"}
                          onClick={function (
                              event: React.MouseEvent<HTMLDivElement, MouseEvent>
                          ): void {
                              throw new Error("Function not implemented.");
                          } } isSecondary={false} isGhost={false}            />
            <ButtonLarge
                          buttonText={"I'll do it later"}
                          onClick={() => {
                              navigate("/login");
                          } } isSecondary={false} isGhost={true}            />
          </div>
        </div>
      </div>
    </>
  );
}
