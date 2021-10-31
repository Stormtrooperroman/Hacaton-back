#include <iostream>

class OrdBook
{
	double **OB;
	int AmOf;

	public:

		OrdBook(int am = 0);
		OrdBook(OrdBook&);
		~OrdBook()
		{
			if (OB)
			{
				for (int i = 0; i < AmOf; i++)
					delete[] OB[i];
				delete[] OB;
			}
			OB = NULL;
		}

		double PrInCir(OrdBook &);
};

OrdBook::OrdBook(int am)
{
	OB = new double*[am];
	for (int i = 0; i < am; i++)
		OB[i] = new double[2];
	AmOf = am;
}

OrdBook::OrdBook(OrdBook& book)
{
	OB = new double*[book.AmOf];
	for (int i = 0; i < book.AmOf; i++)
		OB[i] = new double[2];
	for (AmOf = 0; AmOf < book.AmOf; AmOf++)
		for (int i = 0; i < 2; i++)
			OB[AmOf][i] = book.OB[AmOf][i];
}

double OrdBook::PrInCir(OrdBook& book)
{
	double TotPr;
	for (int i = 0; i < AmOf; i++)
		TotPr += book.OB[AmOf][0] * book.OB[AmOf][1];
	return TotPr / book.AmOf;
}

double PrOfTokPT(double *ArPr, int *ArOf, int ticks)
{
	double TotPrPT, PrInCirPT;
	int TotAmOf, AvAmOf;
	for (int i = 0; i < ticks; i++)
		TotPrPT += ArPr[i];
	PrInCirPT = TotPrPT / ticks;
	for (int i = 0; i < ticks; i++)
		TotAmOf += ArOf[i];
	AvAmOf = TotAmOf / ticks;
	return PrInCirPT / AvAmOf;
}

int main()
{

}
