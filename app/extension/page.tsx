import Extensionpre from "../extension/ExtensionPreview"
import PopupUI from "../extension/PopupUI";
import PromptInput from "../extension/PromptInput";
import ModelSelection from "../extension/ModelSelection";
import QuickActions from "../extension/QuickActions";
import SettingsPage from "../extension/SettingsPage";
import UXShowcase from "../extension/UXShowcase";

export default function ExtensionPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Section Heading */}
      <section className="pt-16 pb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight">
          EchoGPT Chrome Extension
        </h1>

        <p className="mt-3 text-gray-500">
          A smarter AI experience, directly inside your browser.
        </p>
      </section>

      {/* Main Extension Preview */}
      <section className="mx-auto max-w-6xl px-6">
        <Extensionpre />
      </section>

      {/* Feature Components */}
      <section className="mx-auto max-w-6xl px-6 py-12">

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

          <PopupUI />

          <PromptInput />

          <ModelSelection />

          <QuickActions />

          <SettingsPage />

          <UXShowcase />

        </div>

      </section>

    </main>
  );
}