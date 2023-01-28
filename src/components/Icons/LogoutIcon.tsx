// This file is part of MinIO Design System
// Copyright (c) 2023 MinIO, Inc.
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

const LogoutIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <defs>
      <clipPath id="prefix__a">
        <path d="M0 0h256v256H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#prefix__a)">
      <path fill="none" d="M0 0h256v256H0z" />
      <path
        data-name="Rect\xE1ngulo 870"
        fill="none"
        d="M255.999.001v256h-256v-256z"
      />
      <path
        data-name="Trazado 454"
        d="M-.001 16.413A16.487 16.487 0 0 1 16.536-.001h135.381c21.752 0 21.752 32.824 0 32.824H33.088v190.355h118.829c21.752 0 21.752 32.822 0 32.822H16.536A16.477 16.477 0 0 1-.001 239.6Zm61.308 95.176h138.227l-18.743-18.588c-15.385-15.262 8-38.471 23.393-23.205l46.878 46.5a16.345 16.345 0 0 1 0 23.408l-46.878 46.51c-15.39 15.266-38.777-7.949-23.393-23.211l18.744-18.592H61.308c-10.872 0-16.307-8.205-16.307-16.41s5.435-16.412 16.307-16.412Z"
      />
      <path
        data-name="Trazado 454 - Contorno"
        d="M-.501 239.601V16.417A17 17 0 0 1 16.536-.497h135.381a16.259 16.259 0 0 1 12.61 5.3 16.393 16.393 0 0 1 3.156 5.422 18.547 18.547 0 0 1 1.048 6.193 18.547 18.547 0 0 1-1.048 6.193 16.393 16.393 0 0 1-3.156 5.422 16.259 16.259 0 0 1-12.61 5.3H33.588v189.355h118.329a16.259 16.259 0 0 1 12.61 5.3 16.374 16.374 0 0 1 3.156 5.422 18.528 18.528 0 0 1 1.048 6.191 18.531 18.531 0 0 1-1.048 6.193 16.374 16.374 0 0 1-3.156 5.422 16.259 16.259 0 0 1-12.61 5.3H16.536a17.034 17.034 0 0 1-6.625-1.328 16.992 16.992 0 0 1-5.416-3.621 16.846 16.846 0 0 1-3.655-5.373 16.663 16.663 0 0 1-1.341-6.593ZM167.731 16.415a17.535 17.535 0 0 0-.991-5.859 15.388 15.388 0 0 0-2.962-5.094A15.286 15.286 0 0 0 151.917.503H16.536A15.994 15.994 0 0 0 .499 16.417v223.184a15.989 15.989 0 0 0 16.037 15.9h135.381a15.286 15.286 0 0 0 11.861-4.959 15.368 15.368 0 0 0 2.962-5.094 17.518 17.518 0 0 0 .991-5.859 17.515 17.515 0 0 0-.991-5.857 15.368 15.368 0 0 0-2.962-5.094 15.286 15.286 0 0 0-11.861-4.959H32.588V32.324h119.329a15.286 15.286 0 0 0 11.861-4.959 15.388 15.388 0 0 0 2.962-5.094 17.526 17.526 0 0 0 .992-5.86ZM44.499 128.001a18.547 18.547 0 0 1 1.048-6.193 16.37 16.37 0 0 1 3.154-5.422 16.248 16.248 0 0 1 12.6-5.3h137.013L180.432 93.35a16.238 16.238 0 0 1-5.179-11.6 16.682 16.682 0 0 1 3.251-9.711 19.071 19.071 0 0 1 8.051-6.451 15.968 15.968 0 0 1 8.961-1.051 17 17 0 0 1 9.013 4.9l46.878 46.5a16.869 16.869 0 0 1 5.084 12.006 16.81 16.81 0 0 1-1.3 6.482 17.213 17.213 0 0 1-3.786 5.631l-46.879 46.51a16.976 16.976 0 0 1-9.01 4.9 15.975 15.975 0 0 1-8.958-1.049 19.084 19.084 0 0 1-8.054-6.453 16.694 16.694 0 0 1-3.254-9.715 16.237 16.237 0 0 1 5.179-11.6l17.882-17.736H61.298a16.249 16.249 0 0 1-12.6-5.3 16.351 16.351 0 0 1-3.154-5.422 18.527 18.527 0 0 1-1.045-6.19Zm156.248-15.912H61.306a15.275 15.275 0 0 0-11.855 4.959 15.365 15.365 0 0 0-2.961 5.094 17.538 17.538 0 0 0-.991 5.859 17.547 17.547 0 0 0 .991 5.859 15.375 15.375 0 0 0 2.961 5.092 15.276 15.276 0 0 0 11.855 4.959h139.443l-.862.855-18.744 18.592a15.257 15.257 0 0 0-4.883 10.891 15.7 15.7 0 0 0 3.067 9.133 18.064 18.064 0 0 0 7.625 6.111 14.955 14.955 0 0 0 8.4.988 16 16 0 0 0 8.482-4.625l46.878-46.51a16.222 16.222 0 0 0 3.567-5.3 15.825 15.825 0 0 0 1.222-6.1 15.868 15.868 0 0 0-4.789-11.295l-46.878-46.5a16.011 16.011 0 0 0-8.485-4.627 15 15 0 0 0-8.4.988 18.055 18.055 0 0 0-7.623 6.111 15.688 15.688 0 0 0-3.064 9.129 15.259 15.259 0 0 0 4.883 10.893Z"
        fill="rgba(0,0,0,0)"
      />
    </g>
  </svg>
);

export default LogoutIcon;