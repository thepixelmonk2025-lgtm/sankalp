import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from './Button';

export interface FormField {
  name: string;
  labelKey: string;
  type: 'text' | 'email' | 'tel' | 'number' | 'textarea' | 'select';
  required?: boolean;
  options?: string[];
  placeholderKey?: string;
}

interface ContactFormProps {
  fields: FormField[];
  submitLabelKey: string;
  // TODO: Replace this placeholder endpoint with your real Formspree or Web3Forms form ID before launch
  // Formspree: https://formspree.io/f/YOUR_FORM_ID
  // Web3Forms: https://api.web3forms.com/submit (add access_key field)
  formspreeEndpoint?: string;
  successMessageKey?: string;
  formId: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  fields,
  submitLabelKey,
  formspreeEndpoint = 'https://formspree.io/f/REPLACE_WITH_REAL_FORM_ID', // TODO: replace before launch
  successMessageKey = 'form.success',
  formId,
}) => {
  const { t } = useTranslation();
  const [values, setValues] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        setStatus('success');
        setValues({});
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div
        className="bg-[#FBF0F0] border border-[#8B1A1A] rounded-xl p-8 text-center"
        role="alert"
        aria-live="polite"
      >
        <div className="text-4xl mb-3">✅</div>
        <p className="text-[#8B1A1A] font-semibold text-lg">{t(successMessageKey)}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} id={formId} noValidate className="space-y-5">
      {fields.map((field) => {
        const label = t(field.labelKey);
        const inputId = `${formId}-${field.name}`;

        const inputClasses =
          'w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1A1A] focus:border-transparent text-base text-[#1A1A1A] transition-all';

        return (
          <div key={field.name} className="flex flex-col gap-1.5">
            <label htmlFor={inputId} className="font-medium text-[#1A1A1A] text-sm">
              {label}
              {field.required && <span className="text-[#D4A017] ml-1">*</span>}
            </label>

            {field.type === 'textarea' ? (
              <textarea
                id={inputId}
                name={field.name}
                required={field.required}
                value={values[field.name] || ''}
                onChange={handleChange}
                rows={4}
                className={inputClasses}
                placeholder={field.placeholderKey ? t(field.placeholderKey) : ''}
              />
            ) : field.type === 'select' && field.options ? (
              <select
                id={inputId}
                name={field.name}
                required={field.required}
                value={values[field.name] || ''}
                onChange={handleChange}
                className={inputClasses}
              >
                <option value="">— Select —</option>
                {field.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={inputId}
                name={field.name}
                type={field.type}
                required={field.required}
                value={values[field.name] || ''}
                onChange={handleChange}
                className={inputClasses}
                placeholder={field.placeholderKey ? t(field.placeholderKey) : ''}
              />
            )}
          </div>
        );
      })}

      {status === 'error' && (
        <p className="text-red-600 text-sm" role="alert">
          {t('form.error')}
        </p>
      )}

      <Button
        type="submit"
        variant="accent"
        size="lg"
        className="w-full"
        disabled={status === 'loading'}
        id={`${formId}-submit`}
      >
        {status === 'loading' ? 'Sending…' : t(submitLabelKey)}
      </Button>
    </form>
  );
};

export default ContactForm;
