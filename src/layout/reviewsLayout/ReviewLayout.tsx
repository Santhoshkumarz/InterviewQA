import React from 'react';

interface ReviewLayoutProps {
  children: React.ReactNode;
}

const ReviewLayout: React.FC<ReviewLayoutProps> = ({ children }) => {
  return (
    <div>
      <h1>Review Layout</h1>
      {children}
    </div>
  );
};

export default ReviewLayout;
