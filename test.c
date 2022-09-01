#include <stdio.h>

int main()
{
	char arr[52][52] = {0, };
	int N;

	scanf(" %d", &N);
	for (int i = 1; i < N + 1; i++)
	{
		for (int j = 1; j < N + 1; j++)
			scanf(" %c", &(arr[i][j]));
	}

	int	max_len = 1;
	int len = 1;
	for (int i = 1; i < N + 1; i++)
	{
		for (int j = 1; j < N + 1; j += len)
		{
			len = 1;
			while (arr[i][j] == arr[i][j + len])
				len++;
			if ((arr[i][j] == arr[i + 1][j + len]) || (arr[i][j] == arr[i - 1][j + len]))
			{
				len++;
				while (arr[i][j] == arr[i][j + len])
					len++;
			}
			else if((arr[i][j] == arr[i + 1][j - 1]) || (arr[i][j] == arr[i - 1][j - 1]) || (arr[i][j] == arr[i][j + len + 1]))
				len++;
			if (len > max_len)
				max_len = len;
		}
	}
	for (int j = 1; j < N + 1; j++)
	{
		for (int i = 1; i < N + 1; i += len)
		{
			len = 1;
			while (arr[i][j] == arr[i + len][j])
				len++;
			if ((arr[i][j] == arr[i + len][j + 1]) || (arr[i][j] == arr[i + len][j - 1]))
			{
				len++;
				while (arr[i][j] == arr[i + len][j])
					len++;
			}
			else if((arr[i][j] == arr[i - 1][j + 1]) || (arr[i][j] == arr[i - 1][j - 1]) || (arr[i][j] == arr[i + len + 1][j]))
				len++;
			if (len > max_len)
				max_len = len;
		}
	}
	printf("%d", max_len);
}