import { Route, Routes } from "react-router-dom";

import Article from "./pages/Article";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SignIn from "./pages/SignIn";
import TermsOfService from "./pages/TermsOfService";
import About from "./pages/About";
import AllArticles from "./pages/AllArticles";
import SignUp from "./pages/Signup";
import MainLayout from "./components/layout/MainLayout";
import AuthLayout from "./components/layout/AuthLayout";
import Category from "./pages/Category";
import AdminLayout from "./components/layout/AdminLayout";
import AdminDashboard from "./components/dashboard/admin/AdminDashboard";
import ClientLayout from "./components/layout/ClientLayout";
import ClientDashboard from "./components/dashboard/client/ClientDashboard";
import Users from "./components/dashboard/admin/Users";
import Roles from "./components/dashboard/admin/Roles";
import AnaLyticsOverview from "./components/dashboard/admin/AnaLyticsOverview";
import Reports from "./components/dashboard/admin/Reports";
import Posts from "./components/dashboard/admin/Posts";
import Pages from "./components/dashboard/admin/Pages";
import Notification from "./components/dashboard/admin/Notification";
import Settings from "./components/dashboard/admin/Settings";
import HelpCenter from "./components/dashboard/admin/HelpCenter";
import ContactSupport from "./components/dashboard/admin/ContactSupport";
import Testimonials from "./components/dashboard/admin/Testimonials";
import FAQs from "./components/dashboard/admin/FAQs";
import ProtectedRoute from "./Routes/ProtectedRoutes";

const RoutesLink = () => {
  return (
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
      <Route element={<ProtectedRoute />}>
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
      <Route element={<ProtectedRoute />}>
        <Route path="/client" element={<ClientLayout />}>
          <Route index element={<ClientDashboard />} />
          <Route path="/client/profile" element={<ClientDashboard />} />
          <Route path="/client/posts" element={<ClientDashboard />} />
          <Route path="/client/settings" element={<ClientDashboard />} />
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
  );
};

export default RoutesLink;
