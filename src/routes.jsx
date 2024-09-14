import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./Routes/ProtectedRoutes";

// Lazy load components
const Article = React.lazy(() => import("./pages/Article"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Home = React.lazy(() => import("./pages/Home"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));
const SignIn = React.lazy(() => import("./pages/SignIn"));
const TermsOfService = React.lazy(() => import("./pages/TermsOfService"));
const About = React.lazy(() => import("./pages/About"));
const AllArticles = React.lazy(() => import("./pages/AllArticles"));
const SignUp = React.lazy(() => import("./pages/Signup"));
const MainLayout = React.lazy(() => import("./components/layout/MainLayout"));
const AuthLayout = React.lazy(() => import("./components/layout/AuthLayout"));
const Category = React.lazy(() => import("./pages/Category"));
const AdminLayout = React.lazy(() => import("./components/layout/AdminLayout"));
const AdminDashboard = React.lazy(() =>
  import("./components/dashboard/admin/AdminDashboard")
);
const ClientLayout = React.lazy(() =>
  import("./components/layout/ClientLayout")
);
const ClientDashboard = React.lazy(() =>
  import("./components/dashboard/client/ClientDashboard")
);
const Users = React.lazy(() => import("./components/dashboard/admin/Users"));
const Roles = React.lazy(() => import("./components/dashboard/admin/Roles"));
const AnaLyticsOverview = React.lazy(() =>
  import("./components/dashboard/admin/AnaLyticsOverview")
);
const Reports = React.lazy(() =>
  import("./components/dashboard/admin/Reports")
);
const Posts = React.lazy(() => import("./components/dashboard/admin/Posts"));
const Pages = React.lazy(() => import("./components/dashboard/admin/Pages"));
const Notification = React.lazy(() =>
  import("./components/dashboard/admin/Notification")
);
const Settings = React.lazy(() =>
  import("./components/dashboard/admin/Settings")
);
const HelpCenter = React.lazy(() =>
  import("./components/dashboard/admin/HelpCenter")
);
const ContactSupport = React.lazy(() =>
  import("./components/dashboard/admin/ContactSupport")
);
const Testimonials = React.lazy(() =>
  import("./components/dashboard/admin/Testimonials")
);
const FAQs = React.lazy(() => import("./components/dashboard/admin/FAQs"));
const ClientNotifications = React.lazy(() =>
  import("./components/dashboard/client/ClientNotifications")
);
const ClientPosts = React.lazy(() =>
  import("./components/dashboard/client/ClientPosts")
);
const ClientSettings = React.lazy(() =>
  import("./components/dashboard/client/ClientSettings")
);
const ClientSettingsProfile = React.lazy(() =>
  import("./components/dashboard/client/ClientSettingsProfile")
);
const ClientSettingsAccount = React.lazy(() =>
  import("./components/dashboard/client/ClientSettingsAccount")
);
const ClientSettingsCustomization = React.lazy(() =>
  import("./components/dashboard/client/ClientSettingsCustomization")
);

const RoutesLink = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path="/signin"
          element={
            <AuthLayout>
              <SignIn />
            </AuthLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthLayout>
              <SignUp />
            </AuthLayout>
          }
        />

        {/* Protect admin routes */}
        <Route element={<ProtectedRoute requiredRole="admin" />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/roles" element={<Roles />} />
            <Route path="/admin/analytics" element={<AnaLyticsOverview />} />
            <Route path="/admin/reports" element={<Reports />} />
            <Route path="/admin/posts" element={<Posts />} />
            <Route path="/admin/pages" element={<Pages />} />
            <Route path="/admin/testimonials" element={<Testimonials />} />
            <Route path="/admin/faqs" element={<FAQs />} />
            <Route path="/admin/notifications" element={<Notification />} />
            <Route path="/admin/settings" element={<Settings />} />
            <Route path="/admin/help" element={<HelpCenter />} />
            <Route path="/admin/support" element={<ContactSupport />} />
          </Route>
        </Route>

        {/* Protect client routes */}
        <Route element={<ProtectedRoute requiredRole="client" />}>
          <Route path="/client" element={<ClientLayout />}>
            <Route index element={<ClientDashboard />} />
            <Route path="/client/posts" element={<ClientPosts />} />
            <Route
              path="/client/notifications"
              element={<ClientNotifications />}
            />
            <Route path="/client/settings" element={<ClientSettings />}>
              <Route index element={<ClientSettingsProfile />} />
              <Route
                path="/client/settings/profile"
                element={<ClientSettingsProfile />}
              />
              <Route
                path="/client/settings/customization"
                element={<ClientSettingsCustomization />}
              />
              <Route
                path="/client/settings/account"
                element={<ClientSettingsAccount />}
              />
            </Route>
          </Route>
        </Route>

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="articles" element={<AllArticles />} />
          <Route path="articles/:id" element={<Article />} />
          <Route path="categories" element={<AllArticles />} />
          <Route path="categories/:category" element={<Category />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default RoutesLink;
