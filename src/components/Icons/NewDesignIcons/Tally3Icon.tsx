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

const Tally3Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.66667 1.96667C3.05327 1.96667 3.36667 2.28008 3.36667 2.66667V13.3333C3.36667 13.7199 3.05327 14.0333 2.66667 14.0333C2.28008 14.0333 1.96667 13.7199 1.96667 13.3333V2.66667C1.96667 2.28008 2.28008 1.96667 2.66667 1.96667ZM6.00001 1.96667C6.38661 1.96667 6.70001 2.28008 6.70001 2.66667V13.3333C6.70001 13.7199 6.38661 14.0333 6.00001 14.0333C5.61341 14.0333 5.30001 13.7199 5.30001 13.3333V2.66667C5.30001 2.28008 5.61341 1.96667 6.00001 1.96667ZM9.33334 1.96667C9.71994 1.96667 10.0333 2.28008 10.0333 2.66667V13.3333C10.0333 13.7199 9.71994 14.0333 9.33334 14.0333C8.94674 14.0333 8.63334 13.7199 8.63334 13.3333V2.66667C8.63334 2.28008 8.94674 1.96667 9.33334 1.96667Z"
      fill="currentColor"
    />
  </svg>
);
export default Tally3Icon;
