import { ref } from "vue";
import { axiosGet } from "@/utils/request";

export const useAxios = async <T>(url: string) => {
  const data = ref<T | null>(null);
  const error = ref<Error | null>(null);

  try {
    data.value = await axiosGet(url);
  } catch (e) {
    const catchedError = e as Error;
    error.value = catchedError;
  }

  return { data, error };
};
