import unittest
import calc

class TestCalc(unittest.TestCase):
    def test_add(self):
        self.assertEqual(calc.add(10, 5), 15)
        self.assertEqual(calc.add(-2, 5), 3)
        self.assertEqual(calc.add(-1, -2), -3)

    def test_subtract(self):
        self.assertEqual(calc.subtract(10, 5), 5)
        self.assertEqual(calc.subtract(-2, 5), -7)
        self.assertEqual(calc.subtract(-1, -2), 1)

    def test_multiply(self):
        self.assertEqual(calc.multiply(10, 5), 50)
        self.assertEqual(calc.multiply(-2, 5), -10)
        self.assertEqual(calc.multiply(-1, -2), 2)

    def test_divide(self):
        self.assertEqual(calc.divide(10, 5), 2)
        self.assertEqual(calc.divide(-6, 3), -2)
        self.assertEqual(calc.divide(6, -2), -3)
        self.assertEqual(calc.divide(5, 2), 2.5)
        with self.assertRaises(ValueError):
            calc.divide(10, 0)

if __name__ == '__main__':
    unittest.main()