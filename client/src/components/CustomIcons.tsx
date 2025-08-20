// Custom SVG Icons Components - CEVIDA Brand Style
// Modern, minimalist icons based on brand colors

interface IconProps {
  className?: string;
  size?: number;
}

export const StarRatingIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L14.09 8.26L22 9.27L17 14.14L18.18 22.02L12 18.77L5.82 22.02L7 14.14L2 9.27L9.91 8.26L12 2Z"
      fill="currentColor"
      className="fill-clinic-red"
    />
    <path
      d="M12 2L14.09 8.26L22 9.27L17 14.14L18.18 22.02L12 18.77L5.82 22.02L7 14.14L2 9.27L9.91 8.26L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-clinic-red"
    />
  </svg>
);

export const MedicalCheckIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" className="fill-clinic-red-light stroke-clinic-red" strokeWidth="2"/>
    <path
      d="M9 12L11 14L15 10"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-clinic-red"
    />
  </svg>
);

export const ExperienceIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="3" className="fill-clinic-red"/>
    <path
      d="M12 1V3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="stroke-clinic-red"
    />
    <path
      d="M12 21V23"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="stroke-clinic-red"
    />
    <path
      d="M4.22 4.22L5.64 5.64"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="stroke-clinic-red"
    />
    <path
      d="M18.36 18.36L19.78 19.78"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="stroke-clinic-red"
    />
    <path
      d="M1 12H3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="stroke-clinic-red"
    />
    <path
      d="M21 12H23"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="stroke-clinic-red"
    />
  </svg>
);

export const HeartCareIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.84 4.61A5.5 5.5 0 0012 6.89A5.5 5.5 0 003.16 4.61C1.73 5.7 1.73 7.84 3.16 8.93L12 18L20.84 8.93C22.27 7.84 22.27 5.7 20.84 4.61Z"
      className="fill-clinic-red-light stroke-clinic-red"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 13.5L15.5 10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="stroke-white"
    />
  </svg>
);

export const ShieldProtectionIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22S8 18 8 12V7L12 2L16 7V12C16 18 12 22 12 22Z"
      className="fill-clinic-red-light stroke-clinic-red"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 12L11 14L15 10"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-clinic-red"
    />
  </svg>
);

export const InnovationIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="5" className="fill-clinic-red-light stroke-clinic-red" strokeWidth="2"/>
    <path
      d="M12 1L12 3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="stroke-clinic-red"
    />
    <path
      d="M12 21L12 23"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="stroke-clinic-red"
    />
    <path
      d="M4.22 4.22L5.64 5.64"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="stroke-clinic-red"
    />
    <path
      d="M18.36 18.36L19.78 19.78"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="stroke-clinic-red"
    />
    <path
      d="M1 12L3 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="stroke-clinic-red"
    />
    <path
      d="M21 12L23 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="stroke-clinic-red"
    />
  </svg>
);

export const QualityIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 22.02L12 18.77L5.82 22.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      className="fill-clinic-red stroke-clinic-red"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 8V14"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle
      cx="12"
      cy="17"
      r="1"
      fill="white"
    />
  </svg>
);

export const TrustIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
      className="fill-clinic-red-light stroke-clinic-red"
      strokeWidth="2"
    />
    <path
      d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
      className="fill-clinic-red-light stroke-clinic-red"
      strokeWidth="2"
    />
    <path
      d="M15 8L13 10L9 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-clinic-red"
    />
  </svg>
);

export const PricingIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      className="fill-clinic-red-light stroke-clinic-red"
      strokeWidth="2"
    />
    <path
      d="M12 6V18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="stroke-clinic-red"
    />
    <path
      d="M8 10C8.5 9 9.5 8 12 8C14.5 8 15.5 9 16 10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="stroke-clinic-red"
    />
    <path
      d="M16 14C15.5 15 14.5 16 12 16C9.5 16 8.5 15 8 14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="stroke-clinic-red"
    />
  </svg>
);

export const FaqIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      className="fill-clinic-red-light stroke-clinic-red"
      strokeWidth="2"
    />
    <path
      d="M9.09 9C9.3251 8.33167 9.78915 7.7681 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-clinic-red"
    />
    <circle
      cx="12"
      cy="17"
      r="1"
      className="fill-clinic-red"
    />
  </svg>
);