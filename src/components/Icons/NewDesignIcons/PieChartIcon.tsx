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

const PieChartIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.50502 0.838326C7.63629 0.707051 7.81434 0.633301 7.99999 0.633301C8.9674 0.633301 9.92533 0.823845 10.8191 1.19405C11.7129 1.56426 12.525 2.10689 13.209 2.79095C13.8931 3.47501 14.4357 4.2871 14.8059 5.18087C15.1761 6.07463 15.3667 7.03256 15.3667 7.99997C15.3667 8.38657 15.0533 8.69997 14.6667 8.69997H7.99999C7.61339 8.69997 7.29999 8.38657 7.29999 7.99997V1.3333C7.29999 1.14765 7.37374 0.969601 7.50502 0.838326ZM8.69999 2.0745V7.29997H13.9255C13.8613 6.75682 13.7226 6.22396 13.5125 5.71662C13.2126 4.99271 12.7731 4.33495 12.2191 3.7809C11.665 3.22684 11.0072 2.78734 10.2833 2.48749C9.776 2.27734 9.24313 2.13867 8.69999 2.0745ZM5.9749 1.60666C6.12952 1.96099 5.96763 2.37358 5.6133 2.52821C4.72002 2.91802 3.93583 3.52072 3.32928 4.28362C2.72274 5.04651 2.31232 5.94638 2.13389 6.90454C1.95547 7.8627 2.01448 8.84998 2.30576 9.78006C2.59704 10.7101 3.11172 11.5547 3.80481 12.2399C4.4979 12.9252 5.3483 13.4302 6.28165 13.7108C7.215 13.9915 8.20289 14.0392 9.15895 13.8498C10.115 13.6605 11.0101 13.2398 11.7661 12.6246C12.522 12.0094 13.1157 11.2183 13.4953 10.3207C13.6458 9.9646 14.0565 9.79801 14.4126 9.94857C14.7687 10.0991 14.9353 10.5099 14.7847 10.8659C14.3161 11.9742 13.5831 12.9509 12.6498 13.7104C11.7165 14.47 10.6113 14.9894 9.43095 15.2232C8.25056 15.4569 7.03088 15.398 5.87853 15.0515C4.72618 14.705 3.67625 14.0815 2.82053 13.2355C1.96481 12.3895 1.32937 11.3468 0.969741 10.1985C0.610116 9.05015 0.537264 7.83122 0.757554 6.64824C0.977844 5.46526 1.48457 4.35426 2.23343 3.41236C2.98229 2.47046 3.95048 1.72634 5.05335 1.24506C5.40769 1.09044 5.82027 1.25233 5.9749 1.60666Z"
      fill="currentColor"
    />
  </svg>
);
export default PieChartIcon;
