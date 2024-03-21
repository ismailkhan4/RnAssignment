import axios from 'axios';

export const fetchReminders = async (currentPage: number) => {
  try {
    const response = await axios.get(
      `${process.env.BASE_URL}/reminders/all?page=${currentPage}`,
      {
        headers: {
          Authorization: process.env.AUTH_KEY,
        },
      },
    );
    return response.data.docs;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
