// This file is part of MinIO Design System
// Copyright (c) 2024 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import * as React from "react";
import { SVGProps } from "react";

const SlackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.33498 0.665967C5.66475 0.600372 6.00656 0.634037 6.3172 0.762706C6.62783 0.891375 6.89333 1.10927 7.08013 1.38883C7.26693 1.6684 7.36663 1.99707 7.36663 2.3333V3.3333C7.36663 3.7199 7.05323 4.0333 6.66663 4.0333H5.66663C5.33041 4.0333 5.00173 3.9336 4.72217 3.7468C4.4426 3.56 4.22471 3.2945 4.09604 2.98386C3.96737 2.67323 3.9337 2.33142 3.9993 2.00165C4.06489 1.67188 4.2268 1.36897 4.46455 1.13122C4.7023 0.893471 5.00521 0.731561 5.33498 0.665967ZM5.78144 2.05614C5.72662 2.03343 5.6663 2.02749 5.60811 2.03907C5.54991 2.05064 5.49646 2.07921 5.4545 2.12117C5.41255 2.16313 5.38397 2.21658 5.3724 2.27477C5.36082 2.33297 5.36676 2.39329 5.38947 2.44811C5.41218 2.50292 5.45063 2.54978 5.49996 2.58274C5.5493 2.61571 5.6073 2.6333 5.66663 2.6333H5.96663V2.3333C5.96663 2.27397 5.94904 2.21596 5.91608 2.16663C5.88311 2.1173 5.83626 2.07884 5.78144 2.05614ZM9.96663 2.3333C9.96663 2.16762 9.83232 2.0333 9.66663 2.0333C9.50095 2.0333 9.36663 2.16762 9.36663 2.3333V5.66663C9.36663 5.83232 9.50095 5.96663 9.66663 5.96663C9.83232 5.96663 9.96663 5.83232 9.96663 5.66663V2.3333ZM7.96663 2.3333C7.96663 1.39442 8.72775 0.633301 9.66663 0.633301C10.6055 0.633301 11.3666 1.39442 11.3666 2.3333V5.66663C11.3666 6.60552 10.6055 7.36663 9.66663 7.36663C8.72775 7.36663 7.96663 6.60552 7.96663 5.66663V2.3333ZM13.0161 4.09604C13.3267 3.96737 13.6685 3.9337 13.9983 3.9993C14.3281 4.06489 14.631 4.2268 14.8687 4.46455C15.1065 4.7023 15.2684 5.00521 15.334 5.33498C15.3996 5.66475 15.3659 6.00656 15.2372 6.3172C15.1086 6.62783 14.8907 6.89333 14.6111 7.08013C14.3315 7.26693 14.0029 7.36663 13.6666 7.36663H12.6666C12.28 7.36663 11.9666 7.05323 11.9666 6.66663V5.66663C11.9666 5.33041 12.0663 5.00173 12.2531 4.72217C12.4399 4.4426 12.7054 4.22471 13.0161 4.09604ZM13.7252 5.3724C13.667 5.36082 13.6066 5.36676 13.5518 5.38947C13.497 5.41218 13.4502 5.45063 13.4172 5.49996C13.3842 5.5493 13.3666 5.6073 13.3666 5.66663V5.96663H13.6666C13.726 5.96663 13.784 5.94904 13.8333 5.91608C13.8826 5.88311 13.9211 5.83626 13.9438 5.78144C13.9665 5.72662 13.9724 5.6663 13.9609 5.60811C13.9493 5.54991 13.9207 5.49646 13.8788 5.4545C13.8368 5.41255 13.7834 5.38397 13.7252 5.3724ZM2.3333 6.0333C2.16762 6.0333 2.0333 6.16762 2.0333 6.3333C2.0333 6.49899 2.16762 6.6333 2.3333 6.6333H5.66663C5.83232 6.6333 5.96663 6.49899 5.96663 6.3333C5.96663 6.16762 5.83232 6.0333 5.66663 6.0333H2.3333ZM0.633301 6.3333C0.633301 5.39442 1.39442 4.6333 2.3333 4.6333H5.66663C6.60552 4.6333 7.36663 5.39442 7.36663 6.3333C7.36663 7.27218 6.60552 8.0333 5.66663 8.0333H2.3333C1.39442 8.0333 0.633301 7.27218 0.633301 6.3333ZM10.3333 9.36663C10.1676 9.36663 10.0333 9.50095 10.0333 9.66663C10.0333 9.83232 10.1676 9.96663 10.3333 9.96663H13.6666C13.8323 9.96663 13.9666 9.83232 13.9666 9.66663C13.9666 9.50095 13.8323 9.36663 13.6666 9.36663H10.3333ZM8.6333 9.66663C8.6333 8.72775 9.39442 7.96663 10.3333 7.96663H13.6666C14.6055 7.96663 15.3666 8.72775 15.3666 9.66663C15.3666 10.6055 14.6055 11.3666 13.6666 11.3666H10.3333C9.39442 11.3666 8.6333 10.6055 8.6333 9.66663ZM1.38883 8.9198C1.6684 8.733 1.99707 8.6333 2.3333 8.6333H3.3333C3.7199 8.6333 4.0333 8.9467 4.0333 9.3333V10.3333C4.0333 10.6695 3.9336 10.9982 3.7468 11.2778C3.56 11.5573 3.2945 11.7752 2.98386 11.9039C2.67323 12.0326 2.33142 12.0662 2.00165 12.0006C1.67188 11.935 1.36897 11.7731 1.13122 11.5354C0.893471 11.2976 0.731562 10.9947 0.665967 10.665C0.600372 10.3352 0.634037 9.99337 0.762706 9.68274C0.891375 9.3721 1.10927 9.1066 1.38883 8.9198ZM2.3333 10.0333C2.27397 10.0333 2.21596 10.0509 2.16663 10.0839C2.1173 10.1168 2.07884 10.1637 2.05614 10.2185C2.03343 10.2733 2.02749 10.3336 2.03907 10.3918C2.05064 10.45 2.07921 10.5035 2.12117 10.5454C2.16313 10.5874 2.21658 10.616 2.27477 10.6275C2.33297 10.6391 2.39329 10.6332 2.44811 10.6105C2.50292 10.5878 2.54978 10.5493 2.58274 10.5C2.61571 10.4506 2.6333 10.3926 2.6333 10.3333V10.0333H2.3333ZM6.3333 10.0333C6.16762 10.0333 6.0333 10.1676 6.0333 10.3333V13.6666C6.0333 13.8323 6.16762 13.9666 6.3333 13.9666C6.49899 13.9666 6.6333 13.8323 6.6333 13.6666V10.3333C6.6333 10.1676 6.49899 10.0333 6.3333 10.0333ZM4.6333 10.3333C4.6333 9.39442 5.39442 8.6333 6.3333 8.6333C7.27218 8.6333 8.0333 9.39442 8.0333 10.3333V13.6666C8.0333 14.6055 7.27218 15.3666 6.3333 15.3666C5.39442 15.3666 4.6333 14.6055 4.6333 13.6666V10.3333ZM8.6333 12.6666C8.6333 12.28 8.9467 11.9666 9.3333 11.9666H10.3333C10.6695 11.9666 10.9982 12.0663 11.2778 12.2531C11.5573 12.4399 11.7752 12.7054 11.9039 13.0161C12.0326 13.3267 12.0662 13.6685 12.0006 13.9983C11.935 14.3281 11.7731 14.631 11.5354 14.8687C11.2976 15.1065 10.9947 15.2684 10.665 15.334C10.3352 15.3996 9.99337 15.3659 9.68274 15.2372C9.37211 15.1086 9.1066 14.8907 8.9198 14.6111C8.733 14.3315 8.6333 14.0029 8.6333 13.6666V12.6666ZM10.0333 13.3666V13.6666C10.0333 13.726 10.0509 13.784 10.0839 13.8333C10.1168 13.8826 10.1637 13.9211 10.2185 13.9438C10.2733 13.9665 10.3336 13.9724 10.3918 13.9609C10.45 13.9493 10.5035 13.9207 10.5454 13.8788C10.5874 13.8368 10.616 13.7834 10.6275 13.7252C10.6391 13.667 10.6332 13.6066 10.6105 13.5518C10.5878 13.497 10.5493 13.4502 10.5 13.4172C10.4506 13.3842 10.3926 13.3666 10.3333 13.3666H10.0333Z"
      fill="currentColor"
    />
  </svg>
);
export default SlackIcon;