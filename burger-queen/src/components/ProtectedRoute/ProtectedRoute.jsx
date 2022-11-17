export const ProtectedRoute = ({
    isAllowed,
    redirectPath = '/orders',
    children,
  }) => {
    if (isAllowed) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children ? children : '' ;
  };