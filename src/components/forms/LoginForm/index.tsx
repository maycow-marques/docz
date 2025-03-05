"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { Alert } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useModal } from "@/core/hooks/useModal";
import { useZodTranslation } from "@/core/hooks/useZodTranslation";
import { useRouter } from "@/i18n/navigation";

export function LoginForm() {
  const t = useTranslations();
  const router = useRouter();
  const translateError = useZodTranslation();
  const { openModal, closeModal } = useModal();
  const [isPending, startTransition] = useTransition();

  const schema = z.object({
    client: z
      .string({ required_error: translateError({ code: "required" }) })
      .min(3, { message: translateError({ code: "too_small", params: { min: 3 } }) })
      .max(50, { message: translateError({ code: "too_big", params: { max: 50 } }) }),
    username: z
      .string({ required_error: translateError({ code: "required" }) })
      .min(3, { message: translateError({ code: "too_small", params: { min: 3 } }) })
      .max(50, { message: translateError({ code: "too_big", params: { max: 50 } }) }),
    password: z
      .string({ required_error: translateError({ code: "required" }) })
      .min(3, { message: translateError({ code: "too_small", params: { min: 3 } }) })
      .max(50, { message: translateError({ code: "too_big", params: { max: 50 } }) }),
  });

  type SchemaProps = z.infer<typeof schema>;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaProps>({
    resolver: zodResolver(schema),
    defaultValues: {
      client: "",
      username: "",
      password: "",
    },
  });

  async function onSubmit({ client, password, username }: SchemaProps) {
    startTransition(async () => {
      const res = await signIn("credentials", {
        client,
        username,
        password,
        redirect: false,
      });

      if (res?.error) {
        openModal(
          <Alert
            title={t("shared.errors.invalid-credentials.title")}
            message={t("shared.errors.invalid-credentials.text")}
            severity="danger"
            onClose={closeModal}
          />
        );
      } else {
        router.push("/dashboard");
      }
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-5 space-y-4">
      <Controller
        name="client"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            id={field.name}
            error={!!errors.client?.message}
            helpText={errors.client?.message}
            placeholder={t("login-page.form.client")}
          />
        )}
      />

      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            id={field.name}
            error={!!errors.username?.message}
            helpText={errors.username?.message}
            placeholder={t("login-page.form.username")}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            id={field.name}
            type="password"
            error={!!errors.password?.message}
            helpText={errors.password?.message}
            placeholder={t("login-page.form.password")}
          />
        )}
      />

      <Button type="submit" block loading={isPending}>
        {t("login-page.form.button-submit")}
      </Button>

      <p className="text-center text-sm">
        {t.rich("login-page.form.forget-password", {
          important: (chunks) => <span className="cursor-pointer text-blue-600">{chunks}</span>,
        })}
      </p>
    </form>
  );
}
